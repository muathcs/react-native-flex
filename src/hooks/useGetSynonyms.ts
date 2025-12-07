import { useState } from "react";

interface synonymsResponse {
    word: string;
    score: number;
  }
function useGetSynonyms(){

    const [synonyms, setSynonyms] = useState<synonymsResponse[]>([])
    const [isLoading, setIsLoading] = useState(false)
    


    const fetchSynonyms = async (word:string) => {
        console.log("getting: ", `${import.meta.env.VITE_API_URL}words?rel_syn=${word}`)
        console.log("word: ", word)
        setIsLoading(true)
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}words?rel_syn=${word}`);

            const parsedResponse:synonymsResponse[] = await response.json();
            const sortedSynonyms = parsedResponse.sort((a,b) => b.score - a.score)
            console.log("response: ", parsedResponse)
            setSynonyms(parsedResponse);
          } catch (error: any) {
            console.log("errorxx: ", error.message);
          } finally {
            setIsLoading(false);
          }
    }

    return {isLoading, synonyms, fetchSynonyms}

}

export default useGetSynonyms