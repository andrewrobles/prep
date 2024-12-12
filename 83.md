### Straight Forward Approach

```
Input: head = [1,1,2]
Output: [1,2]
```
We set the head of the list equal to curr and we check next and see that it is equal to the same value. We set curr.next = curr.next.next and see that the new curr.next.val is equal to a different value. We can now do curr = curr.next. We see that curr.next is null so we can terminate and return the head.

```
Input: head = [1,1,2,3,3]
Output: [1,2,3]
```

We see curr.next.val is equal to curr.val so we set curr.next = curr.next.next. We see that curr.next.val is different than curr.next so we set curr = curr.next. We see that the next element has a different value so we set curr to the next element. We see that we have a duplicate case so we handle this the same way he handled the previous duplicate case then we terminate and return head.

### Pseudocode 

We set curr equal to head and do the following until curr.next is equal to null: If curr.val == curr.next.val then we get rid of the duplicate by doing curr.next = curr.next.next. Otherwise, we do curr = curr.next. Once this loop terminates we simply return head. We must handle the edge case when head is null and in that case we just return head.

### Complexity
This solution uses linear time ${O(n)}$ and constant space ${O(1)}$ where $n$ is the number of nodes in the input linked list.

```js
const deleteDuplicates = head => {
    if (!head) {
        return head
    }
    
    let curr = head
    while (curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head
}
```
