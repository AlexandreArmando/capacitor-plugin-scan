import Foundation

@objc public class Scan: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
