import { ReactElement } from "react";
import { FallbackProps } from "react-error-boundary";

interface Props extends FallbackProps {}

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: Props): ReactElement => {
    // @see https://www.npmjs.com/package/react-error-boundary
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
    return (
        <div role="alert">
            <p>{error.message || "Something went wrong"}</p>
            <button onClick={() => resetErrorBoundary()}>Try Again</button>
        </div>
    );
};