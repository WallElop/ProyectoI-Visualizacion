import plotly.express as px
# import plotly.graph_objects as go
import pandas as pd
from scipy.ndimage.measurements import label

def icicleID():
    df = pd.read_csv("C:\\Users\\wEDOw\\Documents\\GitHub\\ProyectoI-Visualizacion\\Exports-2019---Click-to-Select-a-Product.csv")
    df = df.assign(centro="Exportanciones")
    fig = px.icicle(
        df,
        path=['centro','Section','HS2','HS4', 'TradeValue'],
        values= 'TradeValue',
        color='TradeValue',
        maxdepth= 3,
        title="Exportaciones, Costa Rica, 2019",
        color_continuous_scale='blugrn',
    )
    fig.show()      
