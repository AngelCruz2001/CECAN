type TableComponentDetails = {
  type: string;
  content?: string;
  onClick?: () => void;
  id: string;
};

export const useCreateTableComponent = () => {
  const createTableComponent = (details: TableComponentDetails) => {
    const { type, content, onClick, id } = details;
    switch (type) {
      case "TEXT":
        return <div key={id}>{content}</div>;
      case "EDIT-BUTTON":
        return (
          <div key={id}>
            <button onClick={onClick}>Editar</button>
          </div>
        );
      default:
        return <div key={id}>{content}</div>;
    }
  };

  return createTableComponent;
};
