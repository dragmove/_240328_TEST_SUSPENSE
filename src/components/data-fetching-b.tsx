import { fakeFetchApi, wrapPromise } from "@/utils";

const resource = wrapPromise(fakeFetchApi(5000, { message: 'hello, data B'}));

export default function DataFetchingB() {
    const data = resource.read();

    return (
      <div>
        <p>Result B : {JSON.stringify(data)}</p>
      </div>
    );
}
