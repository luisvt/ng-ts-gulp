import {heroApp} from "../mdoule.config";
import IPromise = angular.IPromise;
import IHttpService = angular.IHttpService;

export interface Hero {

}

export class HeroesService {
    /* @ngInject */
    constructor(private $http: IHttpService){}

    get(id: number) : IPromise<Hero> {
        return this.$http.get(`heroes/${id}`);
    }

    query(params: any) : IPromise<Array<Hero>> {
        return this.$http.get(`heroes`, params);
    }
}

heroApp.service('heroesService', HeroesService);
