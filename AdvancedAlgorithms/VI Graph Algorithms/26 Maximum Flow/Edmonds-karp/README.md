# Edmonds-karp

ماتریس رو در تابع جایگذاری می کنیم و فایل رو save  می کنیم 


> Edmonds-karp for Maximum Flow Problem

## Introduction

*the Edmonds–Karp algorithm is an implementation of the Ford–Fulkerson method for computing the maximum flow in a flow network in {\displaystyle O}O{\displaystyle (|V||E|^{2})}{\displaystyle (|V||E|^{2})} time. The algorithm was first published by Yefim Dinitz (whose name is also transliterated "E. A. Dinic", notably as author of his early papers) in 1970[1][2] and independently published by Jack Edmonds and Richard Karp in 1972.[3] Dinic's algorithm includes additional techniques that reduce the running time to {\displaystyle O(|V|^{2}|E|)}{\displaystyle O(|V|^{2}|E|)}.*

1. Flow on an edge doesn't exceed the given edge capacity
2. Incoming flow is equal to Outgoing flow for every vertex excluding sink and source

## Algorithm

	algorithm EdmondsKarp is
    input:
        graph   (graph[v] should be the list of edges coming out of vertex v in the
                 original graph and their corresponding constructed reverse edges
                 which are used for push-back flow.
                 Each edge should have a capacity, flow, source and sink as parameters,
                 as well as a pointer to the reverse edge.)
        s       (Source vertex)
        t       (Sink vertex)
    output:
        flow    (Value of maximum flow)
    
    flow := 0   (Initialize flow to zero)
    repeat
        (Run a breadth-first search (bfs) to find the shortest s-t path.
         We use 'pred' to store the edge taken to get to each vertex,
         so we can recover the path afterwards)
        q := queue()
        q.push(s)
        pred := array(graph.length)
        while not empty(q)
            cur := q.pull()
            for Edge e in graph[cur] do
                 if pred[e.t] = null and e.t ≠ s and e.cap > e.flow then
                    pred[e.t] := e
                    q.push(e.t)
    
        if not (pred[t] = null) then
            (We found an augmenting path.
             See how much flow we can send) 
            df := ∞
            for (e := pred[t]; e ≠ null; e := pred[e.s]) do
                df := min(df, e.cap - e.flow)
            (And update edges by that amount)
            for (e := pred[t]; e ≠ null; e := pred[e.s]) do
                e.flow  := e.flow + df
                e.rev.flow := e.rev.flow - df
            flow := flow + df
    
    until pred[t] = null  (i.e., until no augmenting path was found)
    return flow



==Example==
Given a network of seven nodes, source A, sink G, and capacities as shown below:

[[Image:Edmonds-Karp flow example 0.svg|300px]]

In the pairs <math>f/c</math> written on the edges, <math>f</math> is the current flow, and <math>c</math> is the capacity. The residual capacity from <math>u</math> to <math>v</math> is <math>c_f(u,v)=c(u,v)-f(u,v)</math>, the total capacity, minus the flow that is already used. If the net flow from <math>u</math> to <math>v</math> is negative, it ''contributes'' to the residual capacity.

{| class="wikitable"
|-
! Capacity
! Path
! Resulting network
|-
| <math>\begin{align}
  & \min(c_f(A,D),c_f(D,E),c_f(E,G)) \\
= & \min(3-0,2-0,1-0) = \\
= & \min(3,2,1) = 1
\end{align}</math>
|align="center"| <math>A,D,E,G</math>
| [[Image:Edmonds-Karp flow example 1.svg|300px]]</td>
|-
| <math>\begin{align}
  & \min(c_f(A,D),c_f(D,F),c_f(F,G)) \\
= & \min(3-1,6-0,9-0) \\
= & \min(2,6,9) = 2
\end{align}</math>
|align="center"| <math>A,D,F,G</math>
| [[Image:Edmonds-Karp flow example 2.svg|300px]]</td>
|-
| <math>\begin{align}
  & \min(c_f(A,B),c_f(B,C),c_f(C,D),c_f(D,F),c_f(F,G)) \\
= & \min(3-0,4-0,1-0,6-2,9-2) \\
= & \min(3,4,1,4,7) = 1
\end{align}</math>
|align="center"| <math>A,B,C,D,F,G</math>
| [[Image:Edmonds-Karp flow example 3.svg|300px]]</td>
|-
| <math>\begin{align}
  & \min(c_f(A,B),c_f(B,C),c_f(C,E),c_f(E,D),c_f(D,F),c_f(F,G)) \\
= & \min(3-1,4-1,2-0,0-(-1),6-3,9-3) \\
= & \min(2,3,2,1,3,6) = 1
\end{align}</math>
|align="center"| <math>A,B,C,E,D,F,G</math>
| [[Image:Edmonds-Karp flow example 4.svg|300px]]</td>
|}

Notice how the length of the [[augmenting path]] found by the algorithm (in red) never decreases. The paths found are the shortest possible. The flow found is equal to the capacity across the [[max flow min cut theorem|minimum cut]] in the graph separating the source and the sink. There is only one minimal cut in this graph, partitioning the nodes into the sets <math>\{A,B,C,E\}</math> and <math>\{D,F,G\}</math>, with the capacity
:<math>c(A,D)+c(C,D)+c(E,G)=3+1+1=5.\ </math>
