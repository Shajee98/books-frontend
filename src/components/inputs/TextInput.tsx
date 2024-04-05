const TextInput = (props: { type: string, placeholder: string, setKeyword: (e: string) => void}) => {
    return (
        <input className="px-4 py-1" {...props} onChange={(e) => props.setKeyword(e.target.value)}/>
    );
  };

export default TextInput