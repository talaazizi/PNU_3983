
var MaxFlow = (function () 
{
    function MaxFlow() {
    }
    MaxFlow.prototype.bfs = function (rGraph, s, t, parent) {
        var visited = (function (s) { var a = []; while (s-- > 0)
            a.push(false); return a; })(MaxFlow.V);
        for (var i = 0; i < MaxFlow.V; ++i) {
            visited[i] = false;
        }
        var queue = ([]);
        /* add */ (queue.push(s) > 0);
        visited[s] = true;
        parent[s] = -1;
        while ((queue.length !== 0)) {
            {
                var u = (function (a) { return a.length == 0 ? null : a.shift(); })(queue);
                for (var v = 0; v < MaxFlow.V; v++) {
                    {
                        if (visited[v] === false && rGraph[u][v] > 0) {
                            /* add */ (queue.push(v) > 0);
                            parent[v] = u;
                            visited[v] = true;
                        }
                    }
                    ;
                }
            }
        }
        ;
        return (visited[t] === true);
    };
    MaxFlow.prototype.fordFulkerson = function (graph, s, t) {
        var u;
        var v;
        var rGraph = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([MaxFlow.V, MaxFlow.V]);
        for (u = 0; u < MaxFlow.V; u++) {
            for (v = 0; v < MaxFlow.V; v++) {
                rGraph[u][v] = graph[u][v];
            }
            ;
        }
        var parent = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(MaxFlow.V);
        var max_flow = 0;
        while ((this.bfs(rGraph, s, t, parent))) {
            {
                var path_flow = 2147483647;
                for (v = t; v !== s; v = parent[v]) {
                    {
                        u = parent[v];
                        path_flow = Math.min(path_flow, rGraph[u][v]);
                    }
                    ;
                }
                for (v = t; v !== s; v = parent[v]) {
                    {
                        u = parent[v];
                        rGraph[u][v] -= path_flow;
                        rGraph[v][u] += path_flow;
                    }
                    ;
                }
                max_flow += path_flow;
            }
        }
        ;
        return max_flow;
    };
    MaxFlow.main = function (args) {
		
		var graph = [[22, 0, 10, 0, 0, 0], [0, 30, 0, 15, 0, 0], [0, 8, 0, 0, 4, 0], [0, 0, 19, 0, 10, 0], [0, 0, 0, 17, 0, 22], [0, 0, 5, 0, 0, 1]];        
        var m = new MaxFlow();		
        var holder_result =  m.fordFulkerson(graph, 0, 5);
        console.log("Result : Max flow = " + holder_result);        
        //alert("Result : Max flow = " +holder_result);
		
    };
    return MaxFlow;
}());
//alert('Starting to calculating...');
console.log("Starting to calculating...");
MaxFlow.V = 6;
MaxFlow["__class"] = "MaxFlow";
MaxFlow.main(null);
