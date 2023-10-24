'use client';

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

const CourseForm = () => {

    const [image, setImage] = useState<File | null>(null)

    const submit = (e: FormEvent) => {
        e.preventDefault()

        if(image) {
            const formData = new FormData()
            formData.append('file', image)

            fetch('http://localhost/api/courses', {
                method: 'POST',
                body:formData,
                headers: {
                    'Application-Type': 'multipart/form-data'
                } 
            })
        }

    }

  return (
    <div>
        <form onSubmit={ () => submit }>
            <input type="file" onChange={ (e: ChangeEvent<HTMLInputElement>) => {
                if(e.target.files) {
                    setImage(e.target.files[0])
                    console.log(e.target.files)
                }
            } } />

            <button>Upload</button>
        </form>
    
    {image && (<div className="mt-10">
        <Image src={URL.createObjectURL(image)} width={270} height={170} alt="my image" />
    </div>)}
        
    </div>
  )
}

export default CourseForm