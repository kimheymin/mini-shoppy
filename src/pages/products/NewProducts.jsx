import React from "react";
import { useState } from "react";
import { uploadImage } from "../../api/uploader";
import useProducts from "../../hooks/useProducts";

export default function NewProducts() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleSubmit = (e) => {
    e.preventDefault();

    setUploading(true);
    uploadImage(file)
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("성공적으로 제품이 추가되었습니다.");
              setTimeout(() => {
                setSuccess(null);
              }, 2000);
            },
          }
        );
      })
      .finally(setUploading(false));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
    }
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-2/4 text-center m-auto">
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {success && <p className="my-2">{success}</p>}
      {file && (
        <img
          className="w-48 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={handleChange}
          placeholder="제품 이미지"
          required
        />
        <input
          type="text"
          name="text"
          value={product.text ?? ""}
          onChange={handleChange}
          placeholder="제품명"
        />
        <input
          type="text"
          name="price"
          value={product.price ?? ""}
          onChange={handleChange}
          placeholder="가격"
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          onChange={handleChange}
          placeholder="카테고리"
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ""}
          onChange={handleChange}
          placeholder="옵션(콤마(,)로 구분)"
        />
        <button className="p-1.5 text-white bg-orange-400">
          {uploading ? "업로드 중..." : "제품 등록하기"}
        </button>
      </form>
    </section>
  );
}
