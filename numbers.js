module.exports = {
    oddEven: (list) => {
        let evenNumbers = [];
        let oddNumbers = [];
            let errorList = [];

        if (!list) {
            return 'Empty argument';
        }

        if (!(Array.isArray(list))) {
            return 'Input should be an array.';
        }

        if (!list.length) {
            return 'Array can not be empty.';
        }
        
        list.map(item => {
            if (typeof item !== 'number') {
                 errorList.push(item);
            }
            
            if (item % 2 == 0) {
                evenNumbers.push(item);
            }
            if (item % 2 !== 0) {
                oddNumbers.push(item)
            }
            
        });
        if (errorList.length) {
            return 'Invalid array items';
        }
        return {
            evenNumbers,
            oddNumbers
        };
    }
}
