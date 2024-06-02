import AsyncBoundary from "@/components/async-boundary";
import ContainerA from "@/components/container-a";
import ContainerB from "@/components/container-b";
import DataFetchingA from "@/components/data-fetching-a";
import DataFetchingB from "@/components/data-fetching-b";
import { ErrorFallback } from "@/components/error-fallback";
import { Suspense } from "react";

export default function Root() {
    return <div>
        {/*
        <h2>case 1. fetch a data</h2>
        <Suspense fallback={<Loading />}>
            <DataFetchingA />
        </Suspense>
         */}

        {/* 
        <h2>case 2. fetch multiple datas</h2>
        <Suspense fallback={<Loading />}>
            <DataFetchingA />
            <DataFetchingB />
        </Suspense>
         */}

        
        {/* 
        <h2>case 3. fetch multiple datas in containers</h2>
        <Suspense fallback={<Loading />}>
            <ContainerA />
            <ContainerB />
        </Suspense>
         */}

        <h2>case 4. apply AsyncBoundary</h2>
        <AsyncBoundary ErrorFallback={ErrorFallback} SuspenseFallback={<Loading />}>
            <DataFetchingA />
            <DataFetchingB />
        </AsyncBoundary>
    </div>
}

function Loading() {
    return <div>Loading...</div>;
}