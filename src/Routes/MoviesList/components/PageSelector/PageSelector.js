import { useSearchParams } from "react-router-dom";
import { PageButton, PageButtonNext, PageCounter, ButtonLabel } from "./styled";

const PageSelector = ({ page, maxPages }) => {

    const [params, setParams] = useSearchParams();

    const changePage = (x) => {
        setParams(`page=${x}`)
    };

    return (
        <>
            <PageButton onClick={() => {changePage(1)}}>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.31201 5.3035C0.11223 5.48824 0 5.73877 0 6C0 6.26123 0.11223 6.51176 0.31201 6.6965L5.20657 11.2213C5.40509 11.4011 5.67237 11.5013 5.95033 11.5C6.22828 11.4987 6.49445 11.396 6.691 11.2143C6.88754 11.0326 6.99858 10.7866 6.99999 10.5296C7.00139 10.2727 6.89305 10.0256 6.69849 9.84207L2.54243 6L6.69849 2.15793C6.89305 1.97441 7.00139 1.72732 6.99999 1.47037C6.99858 1.21341 6.88754 0.967353 6.691 0.785657C6.49445 0.60396 6.22828 0.50131 5.95033 0.500012C5.67237 0.498715 5.40509 0.598874 5.20657 0.778726L0.31201 5.3035Z" fill="#7E839A" />
                </svg>
                <ButtonLabel>First</ButtonLabel>
            </PageButton>
            <PageButton onClick={() => {changePage(parseInt(page) - 1)}}>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.31201 5.3035C0.11223 5.48824 0 5.73877 0 6C0 6.26123 0.11223 6.51176 0.31201 6.6965L5.20657 11.2213C5.40509 11.4011 5.67237 11.5013 5.95033 11.5C6.22828 11.4987 6.49445 11.396 6.691 11.2143C6.88754 11.0326 6.99858 10.7866 6.99999 10.5296C7.00139 10.2727 6.89305 10.0256 6.69849 9.84207L2.54243 6L6.69849 2.15793C6.89305 1.97441 7.00139 1.72732 6.99999 1.47037C6.99858 1.21341 6.88754 0.967353 6.691 0.785657C6.49445 0.60396 6.22828 0.50131 5.95033 0.500012C5.67237 0.498715 5.40509 0.598874 5.20657 0.778726L0.31201 5.3035Z" fill="#7E839A" />
                </svg>
                <ButtonLabel>Previous</ButtonLabel>
            </PageButton>
            <PageCounter>Page {page} of {maxPages}</PageCounter>
            <PageButtonNext onClick={() => {changePage(parseInt(page) + 1)}}>
                <ButtonLabel>Next</ButtonLabel>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.68799 5.3035C6.88777 5.48824 7 5.73877 7 6C7 6.26123 6.88777 6.51176 6.68799 6.6965L1.79343 11.2213C1.59491 11.4011 1.32763 11.5013 1.04967 11.5C0.771718 11.4987 0.505548 11.396 0.309002 11.2143C0.112456 11.0326 0.00141732 10.7866 1.3474e-05 10.5296C-0.00139037 10.2727 0.106955 10.0256 0.301505 9.84207L4.45757 6L0.301505 2.15793C0.106955 1.97441 -0.00139037 1.72732 1.3474e-05 1.47037C0.00141732 1.21341 0.112456 0.967353 0.309002 0.785657C0.505548 0.60396 0.771718 0.50131 1.04967 0.500012C1.32763 0.498715 1.59491 0.598874 1.79343 0.778726L6.68799 5.3035Z" fill="#0044CC" />
                </svg>
            </PageButtonNext>
            <PageButtonNext onClick={() => {changePage(maxPages)}}>
                <ButtonLabel>Last</ButtonLabel>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.68799 5.3035C6.88777 5.48824 7 5.73877 7 6C7 6.26123 6.88777 6.51176 6.68799 6.6965L1.79343 11.2213C1.59491 11.4011 1.32763 11.5013 1.04967 11.5C0.771718 11.4987 0.505548 11.396 0.309002 11.2143C0.112456 11.0326 0.00141732 10.7866 1.3474e-05 10.5296C-0.00139037 10.2727 0.106955 10.0256 0.301505 9.84207L4.45757 6L0.301505 2.15793C0.106955 1.97441 -0.00139037 1.72732 1.3474e-05 1.47037C0.00141732 1.21341 0.112456 0.967353 0.309002 0.785657C0.505548 0.60396 0.771718 0.50131 1.04967 0.500012C1.32763 0.498715 1.59491 0.598874 1.79343 0.778726L6.68799 5.3035Z" fill="#0044CC" />
                </svg>
            </PageButtonNext>
        </>
    )
}

export default PageSelector;