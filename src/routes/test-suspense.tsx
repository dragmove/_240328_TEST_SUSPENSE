import AsyncBoundary from "@/components/async-boundary";
import ContainerA from "@/components/container-a";
import ContainerB from "@/components/container-b";
import DataFetchingA from "@/components/data-fetching-a";
import DataFetchingB from "@/components/data-fetching-b";
import { ErrorFallback } from "@/components/error-fallback";
import { Suspense } from "react";

export default function TestSuspense() {
    return <div>
        {/* case 1. fetch a data */}
        {/*         
        <Suspense fallback={<Loading />}>
            <DataFetchingA />
        </Suspense>
         */}

        {/* case 2. fetch multiple datas */}
        {/* 
        <Suspense fallback={<Loading />}>
            <DataFetchingA />
            <DataFetchingB />
        </Suspense>
         */}

        {/* case 3. fetch multiple datas in containers */}
        {/* 
        <Suspense fallback={<Loading />}>
            <ContainerA />
            <ContainerB />
        </Suspense>
         */}

        {/* case 4. apply AsyncBoundary */}
        <AsyncBoundary ErrorFallback={ErrorFallback} SuspenseFallback={<Loading />}>
            <DataFetchingA />
            <DataFetchingB />
        </AsyncBoundary>
    </div>
}

function Loading() {
    return <div>Loading...</div>;
}