/**
 * Binary Heap
 * Main operations:
 * 
 * - Add element
 * - Pull max element
 */

class BinaryHeap {
    #array = new Array(1);

    *[Symbol.iterator]() {
        let copy = this.#array.slice();
        while (copy.length > 1) {
            yield this.#pullMax(copy);
        }
    }

    add(data) {
        this.#array.push(data);
        if (this.capacity == 2) return;

        this.#restoreHeap(this.capacity - 1, this.#array);
    }

    pull() {
        return this.#pullMax(this.#array);
    }

    get capacity() {
        return this.#array.length;
    }

    #pullMax(array) {
        if (array == 1) return;
        if (array == 2) {
            return array.pop();
        } else {
            let max = array[1];
            array[1] = array[array.length - 1];
            array.pop();

            this.#seedDown(1, array);
            return max;
        }
    }

    #restoreHeap(index, array) {
        if (!Math.floor(index) || !Math.floor(index / 2)) return;

        if (array[index] >= array[Math.floor(index / 2)]) {
            this.#swap(index, Math.floor(index / 2), array);
            this.#restoreHeap(Math.floor(index / 2), array);
        }
    }

    #swap(ind1, ind2, array) {
        let draft = array[ind1];
        array[ind1] = array[ind2];
        array[ind2] = draft;
    }

    #seedDown(index, array) {
        let child = this.#getBiggestChildIndex(2 * index, 2 * index + 1, array);
        if (array[child] >= array[index]) {
            this.#swap(index, child, array);
            this.#seedDown(child, array);
        }
    }

    #getBiggestChildIndex(ind1, ind2, array) {
        return array[ind1] >= array[ind2] ? ind1 : ind2;
    }
}