class Heap {    
    constructor(comparator) {
        this.heap = [];
        this.comparator = comparator;
    }
    
    size() {
        return this.heap.length;
    }
    
    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }
    
    poll() {
        let topE = this.heap.shift();
        let popE = this.heap.pop();
        if (popE) {
            this.heap.unshift(popE);
            let c = 0;
            while (true) {
                let l = c * 2 + 1;
                let r = c * 2 + 2;
                if (this.heap[l] && (this.comparator(this.heap[c], this.heap[l]) > 0)
                    || this.heap[r] && (this.comparator(this.heap[c], this.heap[r]) > 0)) {
                    let t = (!this.heap[r] || this.comparator(this.heap[r], this.heap[l]) > 0)? l : r;
                    [this.heap[t], this.heap[c], c] = [this.heap[c], this.heap[t], t];
                } else {
                    break;
                }
            }
        }
        return topE ? topE : null;
    }
    
    add(newE) {
        this.heap.push(newE);
        let c = this.heap.length - 1;
        while (true) {
            let p = Math.floor((c-1)/2);
            if (c > 0 && (this.comparator(this.heap[c], this.heap[p]) < 0)) {
                [this.heap[c], this.heap[p], c] = [this.heap[p], this.heap[c], p];
            } else {
                break;
            }
        }
    }
    
    toString() {
        return this.heap + "";
    }
}
