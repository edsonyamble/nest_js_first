import { Injectable, Scope } from "@nestjs/common";

@Injectable({
    scope: Scope.REQUEST
})
export class ScopedService {
    getMessage() {
        return 'scoped service message'
    }
}