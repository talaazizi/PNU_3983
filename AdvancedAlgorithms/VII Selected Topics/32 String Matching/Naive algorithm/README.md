#  Naive algorithm for Pattern Searching

An example:


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

# Related Teching Websites
[faradars](https://blog.faradars.org/naive-algorithm-for-pattern-searching/)

[geeksforgeeks](https://www.geeksforgeeks.org/naive-algorithm-for-pattern-searching/)

# Related Videos
[first on (youtube)](https://www.youtube.com/watch?v=nK7SLhXcqRo)

[secend on (youtube)](https://www.youtube.com/watch?v=xP5Ox-df_ik)

# Related Slides
[slideshare](https://www.slideshare.net/ssuser0528d8/string-matching-naive)

[secend](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwicyOfV-8PrAhXOyaQKHc65D-QQFjASegQIBxAB&url=http%3A%2F%2Fwww.cs.cmu.edu%2F~ab%2F211%2Flectures%2FLecture%252018%2520-%2520String%2520Matching-KMP.ppt&usg=AOvVaw22_-ZYqH5Uco5pnDTDq8bX)

