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
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

interface Props {
  theme: boolean;
}

const Kanban: React.FC<Props> = ({ theme }) => {
  const [states, setStates] = useState<{ id: number; name: string }[]>([]);
  const [state, setState] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<any>([]);
  const [indexs, setIndexs] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  const submitHanlder = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setState("");
    setStates([...states, { id: id, name: state }]);
  };

  const deleteHandler = (data: number) => {
    setStates(
      states.filter((state: { id: number; name: string }) => state.id !== data)
    );
  };

  const changeHandler = (data: number) => {
    const index = states
      .map((e: { id: number; name: string }) => e.id)
      .indexOf(data);
    states[index].name = newValue;
    setStates(states);
    setEdit(false);
    setNewValue("");
  };

  const handler = (data: number) => {

    setEdit(!edit);
    const inde = states
      .map((e: { id: number; name: string }) => e.id)
      .indexOf(data);

    setIndexs(inde);
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(states);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setStates(items);
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

        <button
          className="p-2 bg-midBlue text-white rounded-r-lg dark:bg-red dark:text-black font-semibold"
          onClick={() => setId((id) => id + 1)}
        >
          submit
        </button>
      </form>

      <div className="flex justify-center items-center w-full">
        <TableContainer sx={{ width: "650px" }} component={Paper}>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <Table
                  className="dark:bg-darkMode"
                  sx={{ width: "650px" }}
                  aria-label="simple table"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell className="dark:text-white">Name</TableCell>
                      <TableCell className="dark:text-white" align="right">
                        Doing
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {states.map(
                      (data: { id: number; name: string }, index: number) => {
                        return (
                          <Draggable
                            key={data.id}
                            draggableId={data.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                                key={index}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TableCell component="th" scope="row">
                                  <div className="flex gap-2">
                                    <span className="dark:text-white">
                                      {data.id}
                                    </span>
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
                                <TableCell
                                  className="dark:text-white"
                                  align="right"
                                >
                                  {edit && index === indexs ? (
                                    <input
                                      className="bg-midBlue p-1 rounded-lg border-none outline-0 dark:bg-red"
                                      autoFocus 
                                      onChange={(e) =>
                                        setNewValue(e.target.value)
                                      }
                                    />
                                  ) : (
                                    data.name
                                  )}
                                </TableCell>
                              </TableRow>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </TableBody>
                </Table>
              )}
            </Droppable>
          </DragDropContext>
        </TableContainer>
      </div>
    </section>
  );
};

export default Kanban;
