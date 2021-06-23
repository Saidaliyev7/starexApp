import { ErrorBoundary } from 'components/ErrorBoundary';
import { EAPIProcessStatus } from 'enums';
import { isEqual } from 'lodash';
import { IAPIData } from 'models';
import * as React from 'react';
import { Alert } from 'reactstrap';
import { isError, isInitial, isPending, isSuccess } from 'utils';

export interface IProps<T> {
    branch: IAPIData<T>;
    /**
     * If some of dependencies changes, rerender will occur.
     * Is mandatory if you reference some outter scope variables in render props.
     * For example, `successRender` uses `state.counter` value.
     * If you don't pass `state.counter` value to `deps` and the value changed, rerender won't occur.
     */
    deps: any[];
    successRender?: (data: T) => JSX.Element;
    errorRender?: (error?: string) => JSX.Element;
    initialRender?: () => JSX.Element;
    pendingRender?: (isInitialPending: boolean) => JSX.Element;
    elseRender?: (branch: IAPIData<T>) => JSX.Element;
}

export function asyncAll<X, Y>(x: IAPIData<X>, y: IAPIData<Y>): IAPIData<[X, Y]> {
    if (isError(x) || isError(y)) {
        return {
            data: null,
            error: { error: true, httpCode: 500 },
            status: EAPIProcessStatus.ERROR,
        };
    } else if (isInitial(x) || isInitial(y)) {
        return {
            data: null,
            error: null,
            status: EAPIProcessStatus.IDLE,
        };
    } else if (isPending(x) || isPending(y)) {
        return {
            data: null,
            error: null,
            status: EAPIProcessStatus.PENDING,
        };
    } else if (isSuccess(x) && isSuccess(y)) {
        return {
            data: [x.data, y.data],
            error: null,
            status: EAPIProcessStatus.SUCCESS,
        };
    } else {
        return null;
    }
}

export class APIDataRender<T> extends React.Component<IProps<T>> {
    public static renderNull = (): null => null;
    public static renderError = (error = 'Unknowkn Error'): JSX.Element => (
        <Alert color="danger">{error}</Alert>
    );
    public static all: typeof asyncAll = asyncAll;

    public shouldComponentUpdate(nextProps: IProps<T>): boolean {
        return nextProps.branch !== this.props.branch || !isEqual(this.props.deps, nextProps.deps);
    }

    public render(): JSX.Element {
        const {
            branch,
            successRender,
            errorRender,
            initialRender,
            pendingRender,
            elseRender,
        } = this.props;

        let result = null;

        if (successRender && isSuccess(branch)) {
            result = successRender(branch.data);
        } else if (isError(branch)) {
            result = errorRender
                ? errorRender(branch.error)
                : APIDataRender.renderError(branch.error);
        } else if (initialRender && isInitial(branch)) {
            result = initialRender();
        } else if (pendingRender && isPending(branch)) {
            result = pendingRender(branch.data !== null);
        } else if (elseRender) {
            result = elseRender(branch);
        }

        return <ErrorBoundary>{result}</ErrorBoundary>;
    }
}
