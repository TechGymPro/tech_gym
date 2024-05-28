export function convertPhoneNumber(phoneNumber: string): string {
    const numericOnly = phoneNumber.replace(/\D/g, '');
    const formattedNumber = `+55 ${numericOnly.slice(0, 2)} ${numericOnly.slice(2, 7)}-${numericOnly.slice(7)}`;

    return formattedNumber;
}

