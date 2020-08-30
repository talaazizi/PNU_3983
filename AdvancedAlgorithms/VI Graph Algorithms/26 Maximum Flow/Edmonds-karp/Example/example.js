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
