"use client";

import Link from "next/link";
import Image from "next/image";

function CategoryCard({ category }) {
  return (
    <div
      className="d-flex"
      style={{ justifyContent: "center", marginBottom: "40px" }}
    >
      <div>
        <div className="category-wrapper">
          <Link href={`/categories/${category.name}`}>
            <div className="category-card d-flex">
              <Image
                src={category.image}
                width={150}
                height={150}
                className="category-image"
                alt={category.image}
              />
            </div>
          </Link>
        </div>
        <h2 className="category-title">{category.name}</h2>
      </div>
    </div>
  );
}

export default CategoryCard;
