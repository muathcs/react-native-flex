const test = [2,3,4,5,6,7]


const anew = test.map((val, id)=> (

    {id, val, isFlipped:false, isMatched:false}
)
)

console.log(anew)