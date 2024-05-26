import { fakeFetchApi, wrapPromise } from "@/utils";

const resource = wrapPromise(fakeFetchApi(2000, { message: 'hello, data A' }));

export default function DataFetchingA() {
    const data = resource.read();

    return (
      <div>
        <p>Result A : {JSON.stringify(data)}</p>
      </div>
    );
}

