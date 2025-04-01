type TareaProps = {
    tarea: string;
    BorrarTarea: () => void;
  };
  
  export const Tarea = ({ tarea, BorrarTarea }: TareaProps) => {
    return (
      <div className="task">
        <span>{tarea}</span>
        <button onClick={BorrarTarea}>Borrar</button>
      </div>
    );
  };
  