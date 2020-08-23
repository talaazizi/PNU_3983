#  Naive algorithm for Pattern Searching
The Knuth-Morris-Pratt algorithm implemented in JavaScript


````
Input:  txt[] = "THIS IS A TEST TEXT"
        pat[] = "TEST"
Output: Pattern found at index 10

Input:  txt[] =  "AABAACAADAABAABA"
        pat[] =  "AABA"
Output: Pattern found at index 0
        Pattern found at index 9
        Pattern found at index 12
````
Pattern searching is an important problem in computer science. When we do search for a string in notepad/word file or browser or database, pattern searching algorithms are used to show the search results. 

# What is the best case?
The best case occurs when the first character of the pattern is not present in text at all.
The number of comparisons in best case is O(n).

# What is the worst case ?

The worst case of Naive Pattern Searching occurs in following scenarios.
1) When all characters of the text and pattern are same. 
txt[] = "AAAAAAAAAAAAAAAAAA"; 
pat[] = "AAAAA";

2) Worst case also occurs when only the last character is different.
txt[] = "AAAAAAAAAAAAAAAAAB"; 
pat[] = "AAAAB";

The number of comparisons in the worst case is O(m*(n-m+1)). Although strings which have repeated characters are not likely to appear in English text, they may well occur in other applications (for example, in binary texts). The KMP matching algorithm improves the worst case to O(n). We will be covering KMP in the next post. Also, we will be writing more posts to cover all pattern searching algorithms and data structures.
