import { Pagination } from 'react-bootstrap';

const MyPagination = ({ currentPage, totalPages, handlePageChange, goToFirstPage, goToLastPage }) => {
    const calculateVisiblePageRange = (currentPage, totalPages) => {
        const minPage = Math.max(1, currentPage - Math.floor(3 / 2));
        const maxPage = Math.min(totalPages, currentPage + Math.floor(3 / 2));
    
        return Array.from({ length: maxPage - minPage + 1 }, (_, i) => minPage + i);
    };

    return (
        <Pagination>
            <Pagination.First
                onClick={goToFirstPage}
                disabled={currentPage === 1}
            />
            <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
            {currentPage > 1 && <Pagination.Ellipsis />}
            {calculateVisiblePageRange(currentPage, totalPages).map((page) => (
                <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </Pagination.Item>
            ))}
            {currentPage < totalPages && <Pagination.Ellipsis />}
            <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
            <Pagination.Last onClick={goToLastPage} disabled={currentPage === totalPages} />
        </Pagination>
    );
}

export default MyPagination;