package uk.hybridit.cakemanager.uk.waracle.client;

import org.springframework.web.bind.annotation.*;
import uk.hybridit.cakemanager.uk.waracle.cakemanager.entity.Cake;
import org.springframework.cloud.openfeign.FeignClient;

import java.util.List;

@FeignClient(name = "cakemanager-db", url = "http://localhost:8081/")
public interface CakaManagerDBClient {

        @RequestMapping("/cakes")
        List<Cake> getCakes();

        @RequestMapping("/cakes")
        Cake saveCake(@RequestBody Cake cake);

        @RequestMapping("/cake/{id}")
        Cake getCakeById(@RequestParam("cakeId") Long cakeId);


}
