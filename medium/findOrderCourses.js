/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
    //查找一个循环是否存在于有向图中。如果存在循环，则不存在拓扑排序，因此不可能选取所有课程进行学习
    const  findOrder = (numCourses, prerequisites) =>{
        let inDegree=new Array(numCourses).fill(0),res=[],adj=new Array(numCourses),
        temp=[];
        // initialize adj
        for(let i=0;i<numCourses;i++){
            adj[i]=[];
        }
        for(let i=0;i<prerequisites.length;i++){
            adj[prerequisites[i][1]].push(prerequisites[i][0]);
            inDegree[prerequisites[i][0]]+=1;
        }
        for(let i=0;i<numCourses;i++){
            if(inDegree[i]===0){
                temp.push(i);
            }
        }
        while(temp.length>0){
            let top=temp.shift();
            res.push(top);
            for(let i=0;i<adj[top].length;i++){
                inDegree[adj[top][i]]--;
                if(inDegree[adj[top][i]]===0){
                    temp.push(adj[top][i]);
                }
            }
        }
       return res.length===numCourses?res:[];
    };
