let root = {
  name: "A",
  info: "tst",
  children: [
    {
      name: "A1",
      children: [
        { name: "A12" },
        { name: "A13" },
        { name: "A14" },
        { name: "A15" },
        { name: "A16" },
      ],
    },
    {
      name: "A2",
      children: [
        { name: "A21" },
        {
          name: "A22",
          children: [
            { name: "A221" },
            { name: "A222" },
            { name: "A223" },
            { name: "A224" },
          ],
        },
        { name: "A23" },
        { name: "A24" },
        { name: "A25" },
      ],
    },
    {
      name: "A3",
      children: [
        {
          name: "A31",
          children: [
            { name: "A311" },
            { name: "A312" },
            { name: "A313" },
            { name: "A314" },
            { name: "A315" },
          ],
        },
      ],
    },
    {
      name: "A1",
      children: [
        { name: "A12" },
        { name: "A13" },
        { name: "A14" },
        { name: "A15" },
        { name: "A16" },
      ],
    },
    {
      name: "A2",
      children: [
        { name: "A21" },
        {
          name: "A22",
          children: [
            { name: "A221" },
            { name: "A222" },
            { name: "A223" },
            { name: "A224" },
          ],
        },
        { name: "A23" },
        { name: "A24" },
        { name: "A25" },
      ],
    },
    {
      name: "A3",
      children: [
        {
          name: "A31",
          children: [
            { name: "A311" },
            { name: "A312" },
            { name: "A313" },
            { name: "A314" },
            { name: "A315" },
          ],
        },
      ],
    },
    {
      name: "A1",
      children: [
        { name: "A12" },
        { name: "A13" },
        { name: "A14" },
        { name: "A15" },
        { name: "A16" },
      ],
    },
    {
      name: "A2",
      children: [
        { name: "A21" },
        {
          name: "A22",
          children: [
            { name: "A221" },
            { name: "A222" },
            { name: "A223" },
            { name: "A224" },
          ],
        },
        { name: "A23" },
        { name: "A24" },
        { name: "A25" },
      ],
    },
    {
      name: "A3",
      children: [
        {
          name: "A31",
          children: [
            { name: "A311" },
            { name: "A312" },
            { name: "A313" },
            { name: "A314" },
            { name: "A315" },
          ],
        },
      ],
    },
    {
      name: "A1",
      children: [
        { name: "matanga" },
        { name: "dijo" },
        { name: "la " },
        { name: "changa" },
        { name: "A16" },
      ],
    },
    {
      name: "A2",
      children: [
        { name: "A21" },
        {
          name: "A22",
          children: [
            { name: "A221" },
            { name: "A222" },
            { name: "A223" },
            { name: "A224" },
          ],
        },
        { name: "A23" },
        { name: "A24" },
        { name: "A25" },
      ],
    },
    {
      name: "A3",
      children: [
        {
          name: "A31",
          children: [
            { name: "A311" },
            { name: "A312" },
            { name: "A313" },
            { name: "A314" },
            { name: "A315" },
          ],
        },
      ],
    },
  ],
};

// d3.csv("/../../Exports-2019.csv", function (data) {
//   data.HS2ID = +data.HS2ID;
//   data.HS4ID = +data.HS4ID;
//   data.SectionID = +data.SectionID;
//   data.TradeValue = +data.TradeValue;
//   data.Year = +data.Year;
//   console.log("datos :", data);
//   var dataMap = data.reduce(function (map, node) {
//     map[node.HS4] = node;
//     return map;
//   }, {});
// });

// async function sample() {
//   const data = await d3.csv("/../../Exports-2019.csv");

//   uncount = (data, accessor) =>
//     data.reduce((arr, item) => {
//       const count = accessor(item);
//       for (let i = 0; i < count; i++) {
//         arr.push({
//           ...item,
//         });
//       }
//       return arr;
//     }, []);
// }

// d3.csv("/../../Exports-2019.csv", function (error, data) {
// 	console.log("data: ",data);
// 	if (error) {
//     console.error(error);
//   }
//   // Convertimos los campos numericos a numero
//   data.forEach(function (d) {
//     d.HS2ID = +d.HS2ID;
//     d.HS4ID = +d.HS4ID;
//     d.SectionID = +d.SectionID;
//     d.TradeValue = +d.TradeValue;
//     d.Year = +d.Year;
//   });

// 	var dataMap = data.reduce(function (map, node){
// 		map[node.HS4] = node;
// 		return map;
// 	}, {});

// 	var treeData = [];
// 	data.forEach(function(node) {
// 		var parent = dataMap[node.HS2];
// 		if(parent){
// 			(parent.children || (parent.children = []))
// 			.push(node);
// 		} else {
// 			treeData.push(node);
// 		}
// 	});

// 	root = treeData[0];
// 	createRadialTree(root);

// });

async function createRadialTree(input) {
  let height = 768;
  let width = 1366;
  // /../../Exports-2019.csv
  // const datos = await d3.csv("/../../prueba.csv", (d) => {
  //   if(d.HS2 == "null"){d.HS2 = null;}
  //   return {
  //     HS2: d.HS2,
  //     HS2ID: +d.HS2ID,
  //     HS4: d.HS4,
  //     HS4ID: +d.HS4ID,
  //     Section: d.Section,
  //     SectionID: +d.SectionID,
  //     TradeValue: +d.TradeValue,
  //     Year: +d.Year
  //   };
  // });
  // console.log(datos);

  // const dataMap = datos.reduce((arr,item) => {
  //   arr[item.HS4] = item;
  //   return arr;
  // });
  // console.log(dataMap);
  // var arbol = [];
  // datos.forEach(node => {
  //   console.log(dataMap[node.HS2]);
  //   var parent = dataMap[node.HS2];
  //   if(parent){
  //     (parent.children || (parent.children = []))
  //     .push(node);
  //   } else {
  //     arbol.push(node);
  //   }
  // });
  // console.log(arbol[0]);
  // const raiz = arbol[0];

  d3.csv("/../../prueba.csv").then(function (flatData) {
    flatData.forEach(function (d) {
      if (d.HS2 == "null") {
        d.HS2 = null;
      }
    });
    var collections = d3
      .stratify()
      .id(function (d) {
        return d.HS4;
      })
      .parentId(function (d) {
        return d.HS2;
      })(flatData);

      collections.each(function (d) {
      d.name = d.id;
    });
    console.log(collections);
//-------------------------
    let svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    let diameter = height * 0.75;
    let radius = diameter / 2;

    let tree = d3
      .tree()
      .size([2 * Math.PI, radius])
      .separation(function (a, b) {
        return (a.parent == b.parent ? 1 : 2) / a.depth;
      });

    let data = d3.hierarchy(collections, function(d){
      return d.children;
    });

    let treeData = tree(data);

    let nodes = treeData.descendants();
    let links = treeData.links();

    let graphGroup = svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    graphGroup
      .selectAll(".link")
      .data(links)
      .join("path")
      .attr("class", "link")
      .attr(
        "d",
        d3
          .linkRadial()
          .angle((d) => d.x)
          .radius((d) => d.y)
      );

    let node = graphGroup
      .selectAll(".node")
      .data(nodes)
      .join("g")
      .attr("class", "node")
      .attr("transform", function (d) {
        return `rotate(${(d.x * 180) / Math.PI - 90})` + `translate(${d.y}, 0)`;
      });

    node.append("circle").attr("r", 1);

    node
      .append("text")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("dx", function (d) {
        return d.x < Math.PI ? 8 : -8;
      })
      .attr("dy", ".31em")
      .attr("text-anchor", function (d) {
        return d.x < Math.PI ? "start" : "end";
      })
      .attr("transform", function (d) {
        return d.x < Math.PI ? null : "rotate(180)";
      })
      .text(function (d) {
        return d.data.name;
      });
  });

  //-------------------------
}

createRadialTree(root);
