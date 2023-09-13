import React, { useState ,Fragment} from 'react';

const EditableElement = ({ type, id, name, value, onUpdate, size }) => {
  const [isHovered, setIsHovered] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [newValue, setNewValue] = useState(value);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  
    const handleClick = () => {
      setIsEditing(true);
    };
  
    // const handleUpdate = () => {
    //   setIsEditing(false);
    //   onUpdate(id, type, newValue); // actualizar en el estado del padre
    // };
  
    const sharedStyle = {
      width: '100%',  // ocupará todo el ancho del padre
      backgroundColor: isEditing ? '#555' : 'transparent',
      border: isEditing ? '1px solid #999' : 'none',
      color: 'white',
      overFlow:"auto"
    };

    return (
      <Fragment>

      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        contentEditable={true}
        suppressContentEditableWarning={true}
        
        style={{ 
          backgroundColor: isHovered ? '#444' : 'transparent',
          cursor: 'pointer',
          minHeight:size || "10vh"
        }}
        >
        {type === 'pa' ? (
          <textarea
          readOnly={!isEditing}
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          // onBlur={handleUpdate}
          style={sharedStyle}
          ></textarea>
          ) : (
            <input
            type="text"
            readOnly={!isEditing}
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            // onBlur={handleUpdate}
            style={sharedStyle}
            />
            )}
      </div>
            </Fragment>
    );
};
  
export default EditableElement;
