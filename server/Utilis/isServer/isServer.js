export function is_server() {
    return ! (typeof window !== 'undefined' && window.document);
 }