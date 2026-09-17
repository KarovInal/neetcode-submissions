class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        sandwiches = sandwiches.reverse();

        // make linked list
        let queueHead = null;
        let queueTail = null;
        let queueLength = students.length;
        let queueAttempts = 0;

        for(let i = 0; i < students.length; i++) {
            const current = students[i];

            const queuedStudent = {
                val: current,
                next: null,
            }

            if(!queueHead) {
                queueHead = queueTail = queuedStudent;
            } else {
                queueTail.next = queuedStudent;
                queueTail = queuedStudent;
            }
        }

        // stack – array
        while(queueAttempts < queueLength) {
            const sandwich = sandwiches[sandwiches.length - 1];

            if(queueHead.val === sandwich) {
                queueHead = queueHead.next;
                sandwiches.pop();
                queueLength -= 1;

                queueAttempts = 0;
            } else {
                const oldHead = queueHead;

                queueHead = oldHead.next;

                queueTail.next = oldHead;

                queueTail = oldHead;

                queueAttempts += 1;
            }
        }

        return queueLength;
    }
}
