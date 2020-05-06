export function shuffleArray(array){
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

export function createArrayGroup(array, distribute, totalGroups){
        var items=array;
        var totalValuesInEachGroup =  parseInt(items.length/totalGroups);
        var allGroups=[]
        let i=0,namesProcessed=0;
        for(; i<totalGroups;i++){
            var groups = items.slice(namesProcessed,namesProcessed+totalValuesInEachGroup);
            namesProcessed+=totalValuesInEachGroup;
            allGroups.push(groups);
        }
        if(items.length%totalGroups>0){
            var remainingNames= items.length-namesProcessed;
            var index=items.length;
            var chunk=totalGroups;
            while(remainingNames-->0){
                allGroups[distribute?--chunk:chunk-1].push(items[--index]);
            }
        }
        return allGroups;
}