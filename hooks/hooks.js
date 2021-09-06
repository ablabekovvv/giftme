import useSWR from "swr";

export function useUser (callback) {
    const { data, error } = useSWR(`_`, callback)
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}