import React from "react";

export default function bstStudentList({renderBstStudentList}) {
    console.log("Data",renderBstStudentList);
    let bstElement = renderBstStudentList.map((bstStudent, index)=>{
        return (
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{bstStudent.name}</td>
            <td>{bstStudent.tuoi}</td>
            <td>{bstStudent.diachi}</td>
            <td>{bstStudent.id}</td>
        </tr>
        )
    });
    return (
        <div>
            <h2> danh sach sinh vien </h2>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">diachi</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                {bstElement}
                </tbody>
            </table>
        </div>
    )
}