/**
 * Returns specified component or null
 *
 * @param address {}
 * @param component
 */

export const getAddressComponent = (address, component) => {
    const matchingComponents = address.filter(c => c.types[0] === component);
    if (matchingComponents.length > 0) {
        return matchingComponents[0].short_name;
    }
    return null
}