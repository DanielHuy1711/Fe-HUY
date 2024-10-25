"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "../pages/author.css"
import "bootstrap/dist/css/bootstrap.min.css";

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
    fullname: "",
    email: "",
    createdDate: "",
    userName: "",
    authorName: "",
    type: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Author saved:", formData);
    // Gọi API để lưu thông tin nếu cần
  };

  useEffect(() => {
    const fetchAuthorData = async () => {
      const response = await fetch("api/author"); // Gọi API để lấy thông tin
      const data: FormData = await response.json();
      setFormData(data);
    };
    fetchAuthorData();
  }, []);


  return (
    <div className="Author-page container d-flex justify-content-start align-items-start mt-5">
      <div className="Author-sidebar mt-2 p-3 col-md-3 text-center">
        <img
          src="../public/image/Author.jpg"  
          alt="Author"
          className="img-fluid rounded-circle mb-3"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div className="Author-settings col-md-9">
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <h1 className="mb-0">Edit Author</h1>
          <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Go Back</button>
        </div>
        <form onSubmit={handleSubmit} className="p-3" style={{ border: '1px solid #ccc' }}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              className="border rounded p-2 w-100"
              type="text"
              readOnly
              value={formData.fullname}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="border rounded p-2 w-100"
              type="email"
              readOnly
              value={formData.email}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Created Date</label>
            <input
              className="border rounded p-2 w-100"
              type="text"
              readOnly
              value={formData.createdDate}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              className="border rounded p-2 w-100"
              type="text"
              readOnly
              value={formData.userName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Author Name</label>
            <input
              className="border rounded p-2 w-100"
              name="authorName"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Type</label>
            <input
              className="border rounded p-2 w-100"
              name="type"
              type="text"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Save Profile</button>
        </form>
      </div>
    </div>
  );
}
