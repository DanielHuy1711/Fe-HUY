import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';

interface FormData {
    fullname: string;
    email: string;
    createdDate: string;
    userName: string;
    authorName: string;
    type: string;
  }
  
  export default function Author() {
    const [formData, setFormData] = useState<FormData>({
      fullname: '',
      email: '',
      createdDate: '',
      userName: '',
      authorName: '',
      type: '',
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Author saved:', formData);
      };

    return (
        <div className="Author-page container d-flex justify-content-start align-items-start mt-5">
          <div className="Author-sidebar mt-2 p-3 col-md-3 text-center">
          <img src="D:\Thao_tac_js\Author\src\page\Author.jpg" alt="Author" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
          </div>
          <div className="Author-settings col-md-9">
            <div className="mb-3">
              <h1 className="mb-4">Edit Author</h1>
              <button className="btn btn-secondary">Go Back</button>
            </div>
            <div className="p-3" style={{ border: '1px solid #ccc' }}>
              <div>
                <label className="form-label">Full Name</label>
                <input
                  className="border rounded p-2 w-full"
                  type="text"
                  readOnly
                  value={formData.fullname}
                />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input
                  className="border rounded p-2 w-full"
                  type="email"
                  readOnly
                  value={formData.email}
                />
              </div>
              <div>
                <label className="form-label">Created Date</label>
                <input
                  className="border rounded p-2 w-full"
                  type="text"
                  readOnly
                  value={formData.createdDate}
                />
              </div>
              <div>
                <label className="form-label">User Name</label>
                <input
                  className="border rounded p-2 w-full"
                  type="text"
                  readOnly
                  value={formData.userName}
                />
              </div>
              <div>
                <label className="form-label">Author Name</label>
                <input
                  className="border rounded p-2 w-full"
                  name="authorName"
                  type="text"
                  value={formData.authorName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label">Type</label>
                <input
                  className="border rounded p-2 w-full"
                  name="type"
                  type="text"
                  value={formData.type}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary">Save Profile</button>
            </div>
          </div>
        </div>
    );
  }