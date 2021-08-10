export class ObjectUtils {
    static equals(obj1, obj2, field) {
        if (field)
            return (this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field));
        else
            return this.equalsByValue(obj1, obj2);
    }
    static equalsByValue(obj1, obj2) {
        if (obj1 === obj2)
            return true;
        if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
            var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
            if (arrA && arrB) {
                length = obj1.length;
                if (length != obj2.length)
                    return false;
                for (i = length; i-- !== 0;)
                    if (!this.equalsByValue(obj1[i], obj2[i]))
                        return false;
                return true;
            }
            if (arrA != arrB)
                return false;
            var dateA = obj1 instanceof Date, dateB = obj2 instanceof Date;
            if (dateA != dateB)
                return false;
            if (dateA && dateB)
                return obj1.getTime() == obj2.getTime();
            var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
            if (regexpA != regexpB)
                return false;
            if (regexpA && regexpB)
                return obj1.toString() == obj2.toString();
            var keys = Object.keys(obj1);
            length = keys.length;
            if (length !== Object.keys(obj2).length)
                return false;
            for (i = length; i-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(obj2, keys[i]))
                    return false;
            for (i = length; i-- !== 0;) {
                key = keys[i];
                if (!this.equalsByValue(obj1[key], obj2[key]))
                    return false;
            }
            return true;
        }
        return obj1 !== obj1 && obj2 !== obj2;
    }
    static resolveFieldData(data, field) {
        if (data && field) {
            if (this.isFunction(field)) {
                return field(data);
            }
            else if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for (let i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }
    static isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }
    static reorderArray(value, from, to) {
        let target;
        if (value && from !== to) {
            if (to >= value.length) {
                to %= value.length;
                from %= value.length;
            }
            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    }
    static insertIntoOrderedArray(item, index, arr, sourceArr) {
        if (arr.length > 0) {
            let injected = false;
            for (let i = 0; i < arr.length; i++) {
                let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
                if (currentItemIndex > index) {
                    arr.splice(i, 0, item);
                    injected = true;
                    break;
                }
            }
            if (!injected) {
                arr.push(item);
            }
        }
        else {
            arr.push(item);
        }
    }
    static findIndexInList(item, list) {
        let index = -1;
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] == item) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    static removeAccents(str) {
        if (str && str.search(/[\xC0-\xFF]/g) > -1) {
            str = str
                .replace(/[\xC0-\xC5]/g, "A")
                .replace(/[\xC6]/g, "AE")
                .replace(/[\xC7]/g, "C")
                .replace(/[\xC8-\xCB]/g, "E")
                .replace(/[\xCC-\xCF]/g, "I")
                .replace(/[\xD0]/g, "D")
                .replace(/[\xD1]/g, "N")
                .replace(/[\xD2-\xD6\xD8]/g, "O")
                .replace(/[\xD9-\xDC]/g, "U")
                .replace(/[\xDD]/g, "Y")
                .replace(/[\xDE]/g, "P")
                .replace(/[\xE0-\xE5]/g, "a")
                .replace(/[\xE6]/g, "ae")
                .replace(/[\xE7]/g, "c")
                .replace(/[\xE8-\xEB]/g, "e")
                .replace(/[\xEC-\xEF]/g, "i")
                .replace(/[\xF1]/g, "n")
                .replace(/[\xF2-\xF6\xF8]/g, "o")
                .replace(/[\xF9-\xFC]/g, "u")
                .replace(/[\xFE]/g, "p")
                .replace(/[\xFD\xFF]/g, "y");
        }
        return str;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0dXRpbHMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxzLyIsInNvdXJjZXMiOlsib2JqZWN0dXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFdBQVc7SUFFYixNQUFNLENBQUMsTUFBTSxDQUFDLElBQVMsRUFBRSxJQUFTLEVBQUUsS0FBYztRQUNyRCxJQUFJLEtBQUs7WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7O1lBRW5GLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBUyxFQUFFLElBQVM7UUFDNUMsSUFBSSxJQUFJLEtBQUssSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRS9CLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxRQUFRLElBQUksT0FBTyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3BFLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQ3hCLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUMxQixDQUFDLEVBQ0QsTUFBTSxFQUNOLEdBQUcsQ0FBQztZQUVWLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDZCxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDckIsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU07b0JBQUUsT0FBTyxLQUFLLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO29CQUN0QixJQUFJLENBQUMs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QUFDO2lCQUN2QixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztpQkFDdkIsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQztpQkFDaEMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUM7aUJBQzVCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO2lCQUN2QixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztpQkFDdkIsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUM7aUJBQzVCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO2lCQUN4QixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztpQkFDdkIsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUM7aUJBQzVCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDO2lCQUM1QixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztpQkFDdkIsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQztpQkFDaEMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUM7aUJBQzVCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO2lCQUN2QixPQUFPLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgT2JqZWN0VXRpbHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBlcXVhbHMob2JqMTogYW55LCBvYmoyOiBhbnksIGZpZWxkPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChmaWVsZClcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5yZXNvbHZlRmllbGREYXRhKG9iajEsIGZpZWxkKSA9PT0gdGhpcy5yZXNvbHZlRmllbGREYXRhKG9iajIsIGZpZWxkKSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVxdWFsc0J5VmFsdWUob2JqMSwgb2JqMik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBlcXVhbHNCeVZhbHVlKG9iajE6IGFueSwgb2JqMjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChvYmoxID09PSBvYmoyKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBpZiAob2JqMSAmJiBvYmoyICYmIHR5cGVvZiBvYmoxID09ICdvYmplY3QnICYmIHR5cGVvZiBvYmoyID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YXIgYXJyQSA9IEFycmF5LmlzQXJyYXkob2JqMSlcbiAgICAgICAgICAgICAgICAsIGFyckIgPSBBcnJheS5pc0FycmF5KG9iajIpXG4gICAgICAgICAgICAgICAgLCBpXG4gICAgICAgICAgICAgICAgLCBsZW5ndGhcbiAgICAgICAgICAgICAgICAsIGtleTtcblxuICAgICAgICAgICAgaWYgKGFyckEgJiYgYXJyQikge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IG9iajEubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggIT0gb2JqMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5lcXVhbHNCeVZhbHVlKG9iajFbaV0sIG9iajJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIGRhdGVBID0gb2JqMSBpbnN0YW5jZW9mIERhdGVcbiAgICAgICAgICAgICAgICAsIGRhdGVCID0gb2JqMiBpbnN0YW5jZW9mIERhdGU7XG4gICAgICAgICAgICBpZiAoZGF0ZUEgIT0gZGF0ZUIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIG9iajEuZ2V0VGltZSgpID09IG9iajIuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICB2YXIgcmVnZXhwQSA9IG9iajEgaW5zdGFuY2VvZiBSZWdFeHBcbiAgICAgICAgICAgICAgICAsIHJlZ2V4cEIgPSBvYmoyIGluc3RhbmNlb2YgUmVnRXhwO1xuICAgICAgICAgICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIG9iajEudG9TdHJpbmcoKSA9PSBvYmoyLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqMSk7XG4gICAgICAgICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGxlbmd0aCAhPT0gT2JqZWN0LmtleXMob2JqMikubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iajIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmVxdWFsc0J5VmFsdWUob2JqMVtrZXldLCBvYmoyW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajEgIT09IG9iajEgJiYgb2JqMiAhPT0gb2JqMjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlc29sdmVGaWVsZERhdGEoZGF0YTogYW55LCBmaWVsZDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZmllbGQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQuaW5kZXhPZignLicpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbZmllbGRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpZWxkczogc3RyaW5nW10gPSBmaWVsZC5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMCwgbGVuID0gZmllbGRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlW2ZpZWxkc1tpXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0Z1bmN0aW9uKG9iajogYW55KSB7XG4gICAgICAgIHJldHVybiAhIShvYmogJiYgb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jYWxsICYmIG9iai5hcHBseSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZW9yZGVyQXJyYXkodmFsdWU6IGFueVtdLCBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRhcmdldDogbnVtYmVyO1xuICAgICAgICBpZiAodmFsdWUgJiYgZnJvbSAhPT0gdG8pIHtcbiAgICAgICAgICAgIGlmICh0byA+PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0byAlPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZnJvbSAlPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZS5zcGxpY2UodG8sIDAsIHZhbHVlLnNwbGljZShmcm9tLCAxKVswXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc2VydEludG9PcmRlcmVkQXJyYXkoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCBhcnI6IGFueVtdLCBzb3VyY2VBcnI6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGluamVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJdGVtSW5kZXggPSB0aGlzLmZpbmRJbmRleEluTGlzdChhcnJbaV0sIHNvdXJjZUFycik7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtSW5kZXggPiBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGksIDAsIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpbmplY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpbmplY3RlZCkge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZpbmRJbmRleEluTGlzdChpdGVtOiBhbnksIGxpc3Q6IGFueSk6IG51bWJlciB7XG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gLTE7XG5cbiAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RbaV0gPT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUFjY2VudHMoc3RyKSB7XG4gICAgICAgIGlmIChzdHIgJiYgc3RyLnNlYXJjaCgvW1xceEMwLVxceEZGXS9nKSA+IC0xKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHhDMC1cXHhDNV0vZywgXCJBXCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4QzZdL2csIFwiQUVcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHhDN10vZywgXCJDXCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4QzgtXFx4Q0JdL2csIFwiRVwiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xceENDLVxceENGXS9nLCBcIklcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHhEMF0vZywgXCJEXCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4RDFdL2csIFwiTlwiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xceEQyLVxceEQ2XFx4RDhdL2csIFwiT1wiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xceEQ5LVxceERDXS9nLCBcIlVcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHhERF0vZywgXCJZXCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4REVdL2csIFwiUFwiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xceEUwLVxceEU1XS9nLCBcImFcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHhFNl0vZywgXCJhZVwiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xceEU3XS9nLCBcImNcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHhFOC1cXHhFQl0vZywgXCJlXCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4RUMtXFx4RUZdL2csIFwiaVwiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xceEYxXS9nLCBcIm5cIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHhGMi1cXHhGNlxceEY4XS9nLCBcIm9cIilcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHhGOS1cXHhGQ10vZywgXCJ1XCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4RkVdL2csIFwicFwiKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xceEZEXFx4RkZdL2csIFwieVwiKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICB9XG59XG4iXX0=