import igraph
from igraph import Graph, EdgeSeq
import plotly.graph_objects as go


numeroNodos = 20
v_label = list(map(str, range(numeroNodos)))
G = Graph()
G.add_vertices(numeroNodos)
G.add_edges([(0,1), (0,2), (0,3), (0,4), (0,5), (0,6), (0,7), (0,8), (0,9), (0,10)])
#G = Graph.Tree(numeroNodos, 5) #Cantidad de hijos por nodo
lay = G.layout('rt_circular')

position = {k: lay[k] for k in range(numeroNodos)}
# position = {0: [-0.0, 0.0], 1: [1.0, 0.0], 2: [0.9455185755993168, 0.3255681544571567], 3: [0.7880107536067219, 0.6156614753256583], 
# 4: [0.5446390350150271, 0.838670567945424], 5: [0.24192189559966767, 0.9702957262759965], 6: [-0.08715574274765824, 0.9961946980917455], 
# 7: [-0.40673664307580026, 0.9135454576426009], 8: [-0.6819983600624987,  0.7313537016191702], 9: [-0.882947592858927, 0.4694715627858907], 
# 10: [-0.9876883405951377, 0.15643446504023098], 11: [-0.984807753012208, -0.17364817766693047], 12: [-0.8746197071393956, -0.48480962024633734], 
# 13: [-0.6691306063588581, -0.7431448254773944], 14: [-0.3907311284892738, -0.9205048534524403], 15: [-0.06975647374412469, -0.9975640502598243], 
# 16: [0.25881904510252113, -0.9659258262890682], 17: [0.559192903470747, -0.8290375725550416], 18: [0.7986355100472928, -0.6018150231520483], 
# 19: [0.9510565162951535, -0.3090169943749477]}
print(position)
Y = [lay[k][1] for k in range(numeroNodos)]
M = max(Y)
print("Este es el Y: ",Y)
print("Este es el M: ",M)
es = EdgeSeq(G) # sequence of edges
E = [e.tuple for e in G.es] # list of edges

L = len(position)
Xn = [position[k][0] for k in range(L)]
Yn = [2*M-position[k][1] for k in range(L)]
Xe = []
Ye = []
for edge in E:
    Xe+=[position[edge[0]][0],position[edge[1]][0], None]
    Ye+=[2*M-position[edge[0]][1],2*M-position[edge[1]][1], None]

print("Esto es Ye",Ye)
print("Esto es v_label",v_label)

labels = v_label


fig = go.Figure()
fig.add_trace(go.Scatter(x=Xe,
                   y=Ye,
                   mode='lines',
                   line=dict(color='rgb(210,210,210)', width=1),
                   hoverinfo='none'
                   ))
fig.add_trace(go.Scatter(x=Xn,
                  y=Yn,
                  mode='markers',
                  name='bla',
                  marker=dict(symbol='circle-dot',
                                size=18,
                                color='#6175c1',    #'#DB4551',
                                line=dict(color='rgb(50,50,50)', width=1)
                                ),
                  text=labels,
                  hoverinfo='text',
                  opacity=0.8
                  ))

fig.write_html('first_figure.html', auto_open=True)

