import * as React from 'react';
import { ErrorBoundary as ErrorBoundaryBase, FallbackProps } from 'react-error-boundary';

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
    <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
    </div>
);

export const ErrorBoundary: React.FC = ({ children }) => (
    <ErrorBoundaryBase
        FallbackComponent={ErrorFallback}
        onReset={() => {
            // reset the state of your app so the error doesn't happen again
        }}
    >
        {children}
    </ErrorBoundaryBase>
);
