import React, { useState } from "react";
import { Pagination } from "tharikida-ui/navigation";

const PaginationDocs = () => {
  const [page, setPage] = useState(1);
  return (
    <div style={{ fontFamily: "Montserrat", maxWidth: 700 }}>
      <h1>Pagination</h1>
      <p>
        <b>Pagination</b> provides navigation for paged content. It adapts to
        the number of pages and shows ellipsis when there are too many pages to
        fit.
      </p>
      <h2>Basic Usage</h2>
      <Pagination page={page} pageCount={10} onPageChange={setPage} />
      <pre style={{ background: "#f6f6f6", padding: 12, borderRadius: 6 }}>
        {`<Pagination page={page} pageCount={10} onPageChange={setPage} />`}
      </pre>
      <h2>Props</h2>
      <ul>
        <li>
          <b>page</b>: number — Current page (1-based)
        </li>
        <li>
          <b>pageCount</b>: number — Total number of pages
        </li>
        <li>
          <b>onPageChange</b>: (page: number) =&gt; void — Callback when page
          changes
        </li>
        <li>
          <b>styles</b>: React.CSSProperties — Custom styles
        </li>
        <li>
          <b>className</b>: string — Custom className
        </li>
      </ul>
    </div>
  );
};

export default PaginationDocs;
