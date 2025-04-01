import { Tarea } from "./Tarea";

type PropsListaTareas = {
  listaTareas: string[];
  borrarTarea: (index: number) => void;
};

export const ListaTareas = ({ listaTareas, borrarTarea }: PropsListaTareas) => {
  return (
    <div className="taskList">
      {listaTareas.map((tarea, index) => (
        <Tarea key={index} tarea={tarea} BorrarTarea={() => borrarTarea(index)} />
      ))}
    </div>
  );
};

