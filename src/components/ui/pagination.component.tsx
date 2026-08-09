import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 py-16">
      {currentPage > 1 ? (
        <Link
          to={basePath}
          search={{ page: currentPage - 1 }}
          className="inline-flex items-center gap-1 text-xs tracking-widest font-semibold text-accent-red hover:gap-2 transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
          PREV
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1 text-xs tracking-widest font-semibold text-muted-foreground/40 cursor-not-allowed">
          <ChevronLeft className="h-4 w-4" />
          PREV
        </span>
      )}

      <div className="flex items-center gap-1">
        {pages.map((n) =>
          n === currentPage ? (
            <span
              key={n}
              className="w-8 h-8 flex items-center justify-center text-sm font-semibold text-accent-red"
              aria-current="page"
            >
              {n}
            </span>
          ) : (
            <Link
              key={n}
              to={basePath}
              search={{ page: n }}
              className="w-8 h-8 flex items-center justify-center text-sm text-muted-foreground hover:text-accent-red transition-colors"
            >
              {n}
            </Link>
          ),
        )}
      </div>

      {currentPage < totalPages ? (
        <Link
          to={basePath}
          search={{ page: currentPage + 1 }}
          className="inline-flex items-center gap-1 text-xs tracking-widest font-semibold text-accent-red hover:gap-2 transition-all"
        >
          NEXT
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1 text-xs tracking-widest font-semibold text-muted-foreground/40 cursor-not-allowed">
          NEXT
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </nav>
  );
}
