var list = [];
var arrLength = 420;
var speed = 0;
var checks = 0;
window.onload = function(){
    //list = [100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900];
    
    generateEvenDistList(list,arrLength);
    randomSort(list);
    draw(list);
}

function clickings(){
    console.time();
    returnList = quickSort.Algorithm(list,speed);
    console.timeEnd();
    console.log(checks);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateRandomList(arr,arrLength,waitTimeSecs = 0)
{
    var i;
    for(var k = 0; k < arrLength;k++){
        i = Math.floor(Math.random() * 100); 
        i++;
        console.log(arr);
        arr[k] = i;
        draw(list);
        await sleep(waitTimeSecs);
    }
}

async function generateEvenDistList(arr,arrLength,waitTimeSecs = 0)
{
    var i;
    var setNum = 100 - Math.floor(Math.random() * 100)+1; 

    for(var k = 0; k < arrLength;k++){
        i = Math.floor((setNum/arrLength)*k);
        i++;
        console.log(arr);
        arr[k] = i;
        draw(list);
        await sleep(waitTimeSecs);
    }
}

async function randomSort(arr,waitTimeSecs = 0)
{
    var i,j;
    for(var k = 0; k < arr.length*2;k++){
        i = Math.floor(Math.random() * arr.length); 
        j = Math.floor(Math.random() * arr.length); 
        console.log(arr);
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        draw(list);
        await sleep(waitTimeSecs);
    }
}

selSort = {
    name:"Selection Sort",
    type:"Simple Sort",
    description:"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.",
    
    async Algorithm(arr, waitTimeSecs = 0){
        var n = arr.length;
        checks = 0;
  
        // One by one move boundary of unsorted subarray
        for (var i = 0; i < n-1; i++)
        {
            // Find the minimum element in unsorted array
            var min_idx = i;
            for (var j = i+1; j < n; j++){
                checks++;
                if (arr[j] < arr[min_idx]){
                    await sleep(waitTimeSecs);
                    min_idx = j;
                }
            }
            // Swap the found minimum element with the first
            // element
            var temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
            draw(list);
            console.log(arr);
        }
        return [arr,checks];
    }
}

insSort = {
    name:"Insertion Sort",
    type:"Simple Sort",
    description:"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.",
    
    async Algorithm(arr, waitTimeSecs = 0){
        let n = arr.length;
        let i, key, j; 
        checks = 0;
        for (i = 1; i < n; i++)
        { 
            key = arr[i]; 
            j = i - 1; 
    
            /* Move elements of arr[0..i-1], that are 
            greater than key, to one position ahead 
            of their current position */
            while (j >= 0 && arr[j] > key)
            { 
                checks++;
                arr[j + 1] = arr[j]; 
                j = j - 1; 
                draw(list);
                await sleep(waitTimeSecs);
                console.log(checks);
            } 
            
            arr[j + 1] = key; 
        } 
        return [arr,checks];
    }
}

cockSort = {
    name:"Cocktail Shaker Sort",
    type:"Simple Sort",
    description:"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.",
    
    async Algorithm(arr, waitTimeSecs = 0){
        var temp;
        var swapped = true;
        checks = 0;
        do {
            swapped = false;
            for(var i = 0; i < arr.length - 2; i++){
                checks++;
                if(arr[i] > arr[i+1]){
                    temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    draw(arr);
                    swapped = true;
                    console.log(arr);
                    await sleep(waitTimeSecs);
                }
            }
            if(!swapped){
                checks++;
                break;
            }
            swapped = false;
            for(var i = arr.length - 2; i > 0; i--){
                checks++;
                if(arr[i] > arr[i+1]){
                    temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    draw(arr);
                    swapped = true;
                    console.log(arr);
                    await sleep(waitTimeSecs);
                }
            }
        } while (swapped);
        return [arr,checks]
    }
}

quickSort = {
    name:"Quick Sort",
    type:"Efficient Sort",
    description:"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.",
    
    async Algorithm(arr, waitTimeSecs = 0){
        var low, high;
        checks = 0;
        
        qwikSort(arr,0,arr.length);

        // A utility function to swap two elements
        async function swap(arr, i, j)
        {
            checks++;
            console.log(checks);
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            
        }
        
        /* This function takes last element as pivot, places
        the pivot element at its correct position in sorted
        array, and places all smaller (smaller than pivot)
        to left of pivot and all greater elements to right
        of pivot */
        async function partition(arr, low, high)
        {
            // pivot
            var pivot = arr[high];
            
            // Index of smaller element and
            // indicates the right position
            // of pivot found so far
            var i = (low - 1);
        
            for(var j = low; j <= high - 1; j++)
            {
                // If current element is smaller
                // than the pivot
                if (arr[j] < pivot)
                {
                    
                    // Increment index of
                    // smaller element
                    i++;
                    await swap(arr, i, j);
                    draw(arr);
                    await sleep(waitTimeSecs);
                }
            }
            await swap(arr, i + 1, high);
            draw(arr);
            await sleep(waitTimeSecs);
            return (i + 1);
        }
        
        /* The main function that implements QuickSort
                arr[] --> Array to be sorted,
                low --> Starting index,
                high --> Ending index
        */
        async function qwikSort(arr, low, high)
        {
            if (low < high)
            {
                
                // pi is partitioning index, arr[p]
                // is now at right place
                let pi = await partition(arr, low, high);
        
                // Separately sort elements before
                // partition and after partition
                qwikSort(arr, low, pi - 1);
                qwikSort(arr, pi + 1, high);
            }
            
        }
        return [arr,checks]
    }
}