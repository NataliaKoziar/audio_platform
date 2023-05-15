import React, { useRef } from 'react'

interface UploadStepProps{
    
    setFile:Function;
    accept:string;
    children:any;
}

const UploadStep:React.FC<UploadStepProps> = ({ setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>(null)

     const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            setFile(e.target.files[0])
        }
        
     }
  return (
    <div onClick={()=>ref.current?.click()}>
      <input type='file'
      accept={accept}
      style={{display:'none'}}
      ref={ref}
      />
      {children}
    </div>
  )
}

export default UploadStep
