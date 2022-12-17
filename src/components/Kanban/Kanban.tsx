import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiOutlineDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";

interface Props {
  theme: boolean;
}

const Kanban: React.FC<Props> = ({ theme }) => {
  const [states, setStates] = useState<any>([]);
  const [state, setState] = useState<any>("");
  const [edit, setEdit] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<any>([]);
  const [indexs, setIndexs] = useState(0);

  const submitHanlder = (e: any) => {
    e.preventDefault();
    setState("");
    let id = 1;
    setStates([...states, { id: states.length + 1, name: state }]);
  };

  // console.log(states);

  const deleteHandler = (data: any) => {
    console.log(data);
    setStates(states.filter((state: any) => state.id !== data));
  };

  const changeHandler = (data: any) => {
    const index = states.map((e: any) => e.id).indexOf(data);
    states[index].name = newValue;
    setStates(states);
    setEdit(false);
    setNewValue("");
  };

  const handler = (data: any) => {
    setEdit(!edit);
    const inde = states.map((e: any) => e.id).indexOf(data);
    console.log(inde);

    setIndexs(inde);
    // console.log(inde);
  };

  return (
    <section className="px-8 pt-2 pb-8 md:p-2 ">
      <form
        className="mb-10 flex justify-center items-center"
        onSubmit={submitHanlder}
      >
        <input
          className="p-2 border-none outline-0 rounded-l-lg"
          onChange={(e) => setState(e.target.value)}
          value={state}
        />

        <button className="p-2 bg-midBlue text-white rounded-r-lg dark:bg-red dark:text-black font-semibold">
          submit
        </button>
      </form>
      <TableContainer component={Paper}>
        <Table
          className="dark:bg-darkMode"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="dark:text-white">Name</TableCell>
              <TableCell className="dark:text-white" align="right">
                Doing
              </TableCell>
              <TableCell className="dark:text-white" align="right">
                Is Done
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {states.map((data: any, index: number) => {
              return (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={index}
                >
                  <TableCell component="th" scope="row">
                    <div className="flex gap-2">
                      <span className="dark:text-white">Amin</span>
                      <span
                        className="flex justify-center items-center cursor-pointer"
                        data-id={data.name}
                        onClick={() => deleteHandler(data.id)}
                      >
                        <AiOutlineDelete
                          color={theme ? "#FF4A59" : "#03C9D7"}
                          size={20}
                        />
                      </span>
                      {!edit && (
                        <span
                          className="flex justify-center items-center cursor-pointer"
                          onClick={() => handler(data.id)}
                        >
                          <AiFillEdit
                            color={theme ? "#FF4A59" : "#03C9D7"}
                            size={20}
                          />
                        </span>
                      )}
                      {edit && index === indexs && (
                        <span
                          className="flex justify-center items-center cursor-pointer"
                          onClick={() => changeHandler(data.id)}
                        >
                          <IoMdDoneAll
                            color={theme ? "#FF4A59" : "#03C9D7"}
                            size={20}
                          />
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="dark:text-white" align="right">
                    {edit && index === indexs ? (
                      <input
                        className="bg-midBlue p-1 rounded-lg border-none outline-0 dark:bg-red"
                        onChange={(e) => setNewValue(e.target.value)}
                      />
                    ) : (
                      data.name
                    )}
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default Kanban;
