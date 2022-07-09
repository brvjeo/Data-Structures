const BinaryMaxHeap = require('./BinaryMaxHeap.js');

class BinaryHeap {
    #array = new Array(1);
    /**
     * Constructor takes one argument to set comparison function.
     * Set ```BinaryHeap.maxheap```, if you want to build max-heap, otherwise choose```Binary.minheap```.
     * @param {Function} compare
     */
    constructor(compare = BinaryHeap.maxheap) {
        if (compare == undefined) {
            throw new Error("Undefined compare function!");
        }

        this.compare = compare;
    }
    /**
     * Returns > 0, if first number bigger than second.
     * Returns 0, if first number equals second number.
     * Returns < 0, if first number smaller second number.
     * @param {number} x - first number 
     * @param {*} y - second number
     */
    static maxheap(x, y) {
        return x - y;
    }
    /**
     * Returns > 0, if first number smaller than second.
     * Returns 0, if first number equals second number.
     * Returns < 0, if first number bigger second number.
     * @param {number} x - first number 
     * @param {*} y - second number
     */
    static minheap(x, y) {
        return y - x;
    }

    *[Symbol.iterator]() {
        let copy = this.#array.slice();

        while (copy.length > 1) {
            yield this.#pull(copy);
        }
    }

    add(data) {
        this.#array.push(data);
        if (this.#array.length == 2) return;

        this.#restoreHeap(this.#array.length - 1, this.#array);
    }

    pull() {
        return this.#pull(this.#array);
    }

    #pull(array) {
        if (array.length == 1) return;
        if (array.length == 2) return array.pop();

        let root = array[1];
        array[1] = array[array.length - 1];
        array.pop();

        this.#seed(1, array);
        return root;
    }

    #seed(index, array) {
        if ((index > array.length - 1) || (index * 2 > array.length - 1)) return;

        let child = this.#getPriorChildIndex(index, array);
        if (this.compare(array[index], array[child]) < 0) {
            this.#swap(index, child, array);
            this.#seed(child, array);
        }
    }

    #restoreHeap(index, array) {
        if (!Math.floor(index) || !Math.floor(index / 2)) return;

        if (this.compare(array[index], array[Math.floor(index / 2)]) >= 0) {
            this.#swap(index, Math.floor(index / 2), array);
            this.#restoreHeap(Math.floor(index / 2), array);
        }
    }

    #swap(i, j, array) {
        let stash = array[j];
        array[j] = array[i];
        array[i] = stash;
    }

    #getPriorChildIndex(index, array) {
        if (array[index * 2 + 1] == undefined) return index * 2;
        if (this.compare(array[index * 2], array[index * 2 + 1]) > 0) {
            return index * 2;
        } else {
            return index * 2 + 1;
        }
    }

    get capacity() {
        return this.#array.length;
    }
}

module.exports = BinaryHeap;